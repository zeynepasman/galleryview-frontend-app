import React from 'react';
import { Modal, Card } from 'antd';
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import ReactPlayer from 'react-player'

const { Meta } = Card;
export default function GalleryDetail(props) {

    return (

        <Modal
            visible={props.visible}
            onCancel={props.handleCancel}
            footer={null}
            width={1000}
        >
            <Card
                style={{ width: '95%', height: '60%' }}
                cover={
                    props.type !== "video/mp4" ?
                        <img
                            alt="imageDetail"
                            src={props.link}
                        /> : <ReactPlayer url={props.link} />

                }
                actions={[
                    <div><CaretUpOutlined /><p>{props.ups}</p></div>,
                    <div> <CaretDownOutlined /><p>{props.downs}</p> </div>,

                ]}
            >
                <Meta
                    title={props.title}
                    description={props.description}
                />
            </Card>
        </Modal>

    )

}