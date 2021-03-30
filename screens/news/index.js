import React from 'react';
import { View, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import userSelector from 'modules/user/userSelectors';
import newsSelectors from 'modules/news/newsSelectors';
import newsActions from 'modules/news/newsActions';

import Loader from 'components/Loader';
import FooterLoader from 'components/FooterLoader';
import HeaderContainer from 'components/HeaderContainer';
import TextView from 'components/TextView';
import { listLimit } from 'helper/constants';

import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const News = (props) => {

    const [listData, setListData] = React.useState([])

    const dispatch = useDispatch();
    const loginType = useSelector(userSelector.selectLoginType);
    const record = useSelector(newsSelectors.selectRows);
    const isLoaderVisible = useSelector(newsSelectors.selectLoading);
    const offset = useSelector(newsSelectors.selectOffset);
    const count = useSelector(newsSelectors.selectCount);

    React.useEffect(() => {
        if (loginType === 'staff') {
            dispatch(newsActions.doStaffNews(offset));
        }
        else if (loginType === 'student') {
            dispatch(newsActions.doStudentNews(offset));
        }

    }, [loginType])

    React.useEffect(() => {
        if (record) {
            setListData(listData => [...listData, ...record])
        }
    }, [record])

    const fetchMore = () => {
        if (offset < count && listData.length < count) {
            if (loginType === 'staff') {
                dispatch(newsActions.doStaffNewsLoadMore(offset + listLimit));
            }
            else if (loginType === 'student') {
                dispatch(newsActions.doStudentNewsLoadMore(offset + listLimit));
            }
        }
    }

    const onItemClick = (item) => {
        props.navigation.navigate('newsDetail', { data: item })
    }

    const flatListItem = ({ item }) => (
        <TouchableOpacity onPress={() => onItemClick(item)}>
            <View style={styles.row}>
                {item.attachment ?
                    <FastImage source={{ uri: item.attachment, priority: FastImage.priority.normal }} resizeMode={FastImage.resizeMode.cover} style={styles.image} />
                    : null}
                <View style={item.attachment ? styles.wrapper : styles.wrapperWithoutImage}>
                    <View style={styles.titleWrapper}>
                        <TextView customeSyle={item.attachment ? styles.title : styles.titleWithoutImage} text={item.title} />
                        <TextView customeSyle={styles.date} text={item.submit_date ? moment(item.submit_date).format('DD MMM,YYYY') : ''} />
                    </View>
                    <TextView customeSyle={styles.desc} text={item.description ? item.description : ''} numberOfLines={3} />
                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <>
            { isLoaderVisible ? <Loader visible={isLoaderVisible} /> :
                <HeaderContainer title='News'  {...props}>
                    <FlatList
                        data={listData}
                        renderItem={flatListItem}
                        keyExtractor={item => item.id.toString()}
                        onEndReachedThreshold={0.5}
                        onEndReached={fetchMore}
                        ListFooterComponent={listData.length < count ? FooterLoader : null}
                    />
                </HeaderContainer>
            }
        </>
    );
};


export default News;
