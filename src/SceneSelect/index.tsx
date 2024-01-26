import { Col, Row } from 'antd';
import React from 'react';
import './index.less';

interface SceneSelectProps {
  img: string;
  name: string;
}

interface SceneSelectGroupProps {
  options: any;
  hGutter?: number;
  vGutter?: number;
  ColInRow?: number;
}

const SceneSelect = ({ img, name }: SceneSelectProps) => {
  return (
    <div className="component-scene-select">
      <div className="context">
        <img src={img}></img>
        <div className="desc">{name}</div>
      </div>
    </div>
  );
};

const SceneSelectGroup = ({
  options,
  vGutter = 16,
  hGutter = 16,
  ColInRow = 3,
}: SceneSelectGroupProps) => {
  return (
    <Row gutter={[hGutter, vGutter]} className="component-size-select-group">
      {options.map((item: any) => {
        return (
          <Col span={ColInRow} key={item.name}>
            <SceneSelect img={item.img} name={item.name} />
          </Col>
        );
      })}
    </Row>
  );
};

export { SceneSelect, SceneSelectGroup };
