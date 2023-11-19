import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Input, Space, Avatar, Divider, List, Skeleton } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const ListElement = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch(
      'https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo'
    )
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <>
      <div
        id="headera"
        style={{
          height: 80,
          width: 400,
          padding: '0 16px',
          borderTop: '1px solid rgba(140, 140, 140, 0.35)',
          borderLeft: '1px solid rgba(140, 140, 140, 0.35)',
          borderRight: '1px solid rgba(140, 140, 140, 0.35)',
          backgroundColor: 'rgb(246, 248, 250)',
          borderTopLeftRadius: '8px',
          borderTopRightRadius: '8px',
        }}
      >
        <div
          style={{
            height: 40,
            padding: '8px 0px',
            fontWeight: 600,
          }}
        >
          Список пользователей
        </div>
        <div>
          <Input
            prefix={<SearchOutlined className="site-form-item-icon" />}
            placeholder="input search text"
            allowClear
            onPressEnter={onSearch}
            style={{
              width: '100%',
            }}
          />
        </div>
      </div>
      <div
        id="scrollableDiv"
        style={{
          height: 300,
          width: 400,
          overflow: 'auto',
          padding: '0 16px',
          border: '1px solid rgba(140, 140, 140, 0.35)',
        }}
      >
        <InfiniteScroll
          dataLength={data.length}
          next={loadMoreData}
          hasMore={data.length < 50}
          loader={
            <Skeleton
              avatar
              paragraph={{
                rows: 1,
              }}
              active
            />
          }
          endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
          scrollableTarget="scrollableDiv"
        >
          <List
            dataSource={data}
            size="small"
            renderItem={(item) => (
              <List.Item key={item.email}>
                <List.Item.Meta
                  avatar={<Avatar src={item.picture.large} />}
                  title={<a href="https://ant.design">{item.name.last}</a>}
                  //description={item.email}
                />
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
      <div
        id="foot"
        style={{
          height: 40,
          width: 400,
          padding: '8px 16px',
          borderBottom: '1px solid rgba(140, 140, 140, 0.35)',
          borderLeft: '1px solid rgba(140, 140, 140, 0.35)',
          borderRight: '1px solid rgba(140, 140, 140, 0.35)',
          backgroundColor: 'rgb(246, 248, 250)',
          borderBottomLeftRadius: '8px',
          borderBottomRightRadius: '8px',
        }}
      >
        Записей: {data.length}
      </div>
    </>
  );
};
export default ListElement;
