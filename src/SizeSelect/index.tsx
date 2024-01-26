import { Col, Row } from 'antd';
import React from 'react';
import CustomImage from './custom.png';
import './index.less';

interface SizeSelectProps {
  ratio: string;
  name: string;
}

interface SizeSelectGroupProps {
  options: any;
  hGutter?: number;
  vGutter?: number;
  ColInRow?: number;
}

const SizeSelect = ({ ratio, name }: SizeSelectProps) => {
  return (
    <div className="component-size-select">
      {ratio !== 'custom' ? (
        <div className="size-ratio">
          <span>{ratio}</span>
        </div>
      ) : (
        <div className="size-ratio">
          <img src={CustomImage} />
        </div>
      )}
      {name}
    </div>
  );
};

const SizeSelectGroup = ({
  options = [],
  vGutter = 16,
  hGutter = 16,
  ColInRow = 8,
}: SizeSelectGroupProps) => {
  return (
    <Row gutter={[hGutter, vGutter]} className="component-size-select-group">
      {options.map((item: any) => {
        return (
          <Col span={ColInRow} key={item.name}>
            <SizeSelect ratio={item.ratio} name={item.name} />
          </Col>
        );
      })}
    </Row>
  );
};

export { SizeSelect, SizeSelectGroup };
