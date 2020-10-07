import React from 'react';
import { Select, Input, Switch, Row, Col, Tooltip } from 'antd';
import basicStyle from '../../assets/styles/constants';

const { Option } = Select;
const selectSectionOptions = ['HOT', 'TOP', 'USER'];
const selectSortOptions = ['VIRAL', 'TOP', 'TIME', 'RISING'];
const selectWindowOptions = ['DAY', 'WEEK', 'MONTH', 'YEAR', 'ALL']
const sectionChildren = [];
const sortChildren = [];
const windowChildren = [];

const setChildren = (array, children) => {
    for (let i = 0; i < array.length; i++) {
        children.push(<Option key={i} value={array[i].toLowerCase()}>{array[i]}</Option>);
    }
}
setChildren(selectSectionOptions, sectionChildren);
setChildren(selectSortOptions, sortChildren);
setChildren(selectWindowOptions, windowChildren);



const style = { width: 160 }

export default function Filter(props) {
    const { rowStyle, colStyle, gutter } = basicStyle;

    return (
        <div>
            <Row style={rowStyle} gutter={gutter} justify="start">
                <Col md={8} sm={24} xs={24} style={colStyle}>
                    <Input.Group compact style={{ marginBottom: '30px' }}>
                        <Tooltip title="SELECT SECTION" color={'blue'} key={'blue'}>
                            <Select defaultValue="HOT" value={props.sectionValue} onChange={props.onSectionChange} style={style}>
                                {sectionChildren}
                            </Select>
                        </Tooltip>

                        <Tooltip title="SORT BY" color={'blue'} key={'blue'}>
                            <Select defaultValue="VIRAL" onChange={props.onSortChange} style={style}>
                                {sortChildren}
                            </Select>
                        </Tooltip>
                        <Tooltip title="WINDOW BY" color={'blue'} key={'blue'}>
                            <Select defaultValue="DAY" onChange={props.onWindowChange} style={style}>
                                {windowChildren}
                            </Select>
                        </Tooltip>
                    </Input.Group>

                </Col>
                <Col md={4} sm={24} xs={24} style={colStyle}> <Switch checkedChildren="VIRAL" unCheckedChildren="NOT VIRAL" defaultChecked onChange={props.onViralChanged} /></Col>
            </Row>
        </div>
    )

}