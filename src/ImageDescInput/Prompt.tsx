import { Button, Tabs, Tag } from 'antd';
import React, { useState } from 'react';
import config from './promptConfig';

const { CheckableTag } = Tag;

const Prompt = ({ onOk }: any) => {
  const [tags, setTags] = useState([]);
  const removeItem = (item) => {
    const _new = tags.filter((i) => i !== item);
    setTags(_new);
  };
  console.log(tags);
  return (
    <div className="prompt-container">
      <Tabs
        tabPosition={'left'}
        items={config.map((_) => {
          return {
            label: _.name,
            key: _.name,
            children: (
              <div className="tab-content-container">
                {_.type === 'text' &&
                  _.content.map((item: any) => {
                    return (
                      <CheckableTag
                        checked={tags.includes(item)}
                        key={item}
                        onChange={(checked) => {
                          if (checked) {
                            const _new = [...tags, item];
                            setTags(_new);
                          } else {
                            removeItem(item);
                          }
                        }}
                      >
                        {item}
                      </CheckableTag>
                    );
                  })}
              </div>
            ),
          };
        })}
      />
      <div className="result">
        <div className="tag-container">
          {tags.map((item, index) => {
            return (
              <Tag key={index} closeIcon onClose={() => removeItem(item)}>
                {item}
              </Tag>
            );
          })}
        </div>
        <Button type="primary" onClick={() => onOk?.(tags)}>
          确定
        </Button>
      </div>
    </div>
  );
};

export default Prompt;
