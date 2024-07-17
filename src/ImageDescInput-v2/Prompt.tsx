import { Tabs, Tag } from 'antd';
import { useState } from 'react';
import config from './promptConfig';

const { CheckableTag } = Tag;

const Prompt = ({ onOk }: any) => {
  const [tags, setTags] = useState([]);
  const removeItem = (item) => {
    const _new = tags.filter((i) => i !== item);
    setTags(_new);
    onOk(_new);
  };
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
                            onOk(_new);
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
    </div>
  );
};

export default Prompt;
