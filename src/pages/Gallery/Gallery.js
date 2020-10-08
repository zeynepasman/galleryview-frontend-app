import React from 'react';
import { List, Card, Badge } from 'antd';
import Filter from './Filter';
import GalleryDetail from './GalleryDetailModal'
import { useDispatch, useSelector } from 'react-redux';
import galleryActions from '../../redux/gallery/actions';
import VideoThumbnail from 'react-video-thumbnail';
import Loader from '../../components/Feedback/Loader/loader';
import notification from '../../components/Feedback/Notification'
const { Meta } = Card;
const { initGalleryData } = galleryActions;
const style = { width: 260, height: 300 };
const imageStyle = { width: '100%', height: 200 };

export default function Gallery() {
    const { initialGalleries } = useSelector(state => state.Gallery)
    const [images, setImages] = React.useState([]);
    const [visible, showDetail] = React.useState(false);
    const [image, setImage] = React.useState({});
    const [section, setSection] = React.useState('hot');
    const [sort, setSort] = React.useState('viral');
    const [window, setWindow] = React.useState('day');
    const [showViral, setViral] = React.useState(true)
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(initGalleryData(section, sort, window, showViral)).then(images => {
            setImages(images)
        }).catch(err => {
            notification('error', err)
        });
    }, [dispatch, section, window, sort, showViral]);

    const showModal = (item) => {
        showDetail(true);
        setImage(item)
    };
    const handleSectionChange = (value) => {
        setSection(value);
    }
    const handleSortChange = (value) => {
        setSort(value);
    }
    const handleWindowChange = (value) => {
        setWindow(value);
    }
    const onCancel = () => {
        showDetail(false);
    }
    const handleOnViralChanged = (e) => {
        setViral(e);
    }
    if (!initialGalleries) {
        return (
            <div>
                <Filter onSectionChange={handleSectionChange} onSortChange={handleSortChange}
                    sectionValue={section} onWindowChange={handleWindowChange} onViralChanged={(e) => handleOnViralChanged(e)} />
                <GalleryDetail visible={visible} handleCancel={onCancel}
                    title={image.title} description={image.description} link={image.link} type={image.type} />
                {images.length > 0 ?
                    <List
                        grid={{
                            gutter: 16,
                            xs: 1,
                            sm: 2,
                            md: 3,
                            lg: 1,
                            xl: 5,
                            xxl: 6,
                        }}
                        dataSource={images}
                        renderItem={item => (
                            item.type === 'video/mp4' ?
                                <List.Item>
                                    <Badge.Ribbon text="VIDEO">
                                        <Card hoverable
                                            style={style} onClick={() => showModal(item)}>
                                            <VideoThumbnail
                                                videoUrl={item.link}
                                                width={230}
                                                height={200}
                                            />
                                        </Card>
                                    </Badge.Ribbon>
                                </List.Item>
                                :
                                <List.Item >
                                    <Card
                                        hoverable
                                        style={style}
                                        onClick={() => showModal(item)}
                                        cover={<img alt="gallery" style={imageStyle} src={item.link} />}
                                    >
                                        <Meta description={item.description && item.description.length > 60
                                            ? `${item.description.substring(0, 60)}...`
                                            : item.description} />

                                    </Card>
                                </List.Item>
                        )}
                    /> : <div></div>


                }

            </div>
        );
    } else {
        return (

            <Loader />

        )

    }
}