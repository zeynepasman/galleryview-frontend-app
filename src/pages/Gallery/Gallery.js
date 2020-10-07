import React from 'react';
import { List, Card, Skeleton, Badge } from 'antd';
import Filter from '../../components/navigation/Dropdown';
import GalleryDetail from './GalleryDetailModal'
import { useDispatch } from 'react-redux';
import galleryActions from '../../redux/gallery/actions';
import VideoThumbnail from 'react-video-thumbnail';

const { Meta } = Card;
const { initGalleryData } = galleryActions;
const style = { width: 260, height: 300 };
const imageStyle = { width: '100%', height: 200 };

export default function Gallery() {

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
            console.log(2)
            console.log(err, 'err')
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
    if (images.length > 0) {
        return (
            <div>
                <Filter onSectionChange={handleSectionChange} onSortChange={handleSortChange}
                    sectionValue={section} onWindowChange={handleWindowChange} onViralChanged={(e) => handleOnViralChanged(e)} />
                <GalleryDetail visible={visible} handleCancel={onCancel}
                    title={image.title} description={image.description} link={image.link} type={image.type} />
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
                                    cover={<img alt="example" style={imageStyle} src={item.link} />}
                                >
                                    <Meta description={item.description && item.description.length > 60
                                        ? `${item.description.substring(0, 60)}...`
                                        : item.description} />

                                </Card>
                            </List.Item>
                    )}
                />
            </div>
        );
    } else {
        return (

            <Skeleton />

        )

    }
}