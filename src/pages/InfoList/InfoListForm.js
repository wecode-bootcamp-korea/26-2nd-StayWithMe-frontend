import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import InfoFeed from './InfoFeed';
import { exportQueries, exportPageNum } from './queryModule';
import { API } from '../../ config';

const InfoListForm = () => {
  const [infoList, setInfoList] = useState([]);
  const queries = useLocation().search;

  let page = exportPageNum(queries);
  if (!page) page = '1';
  let newQueries = page
    ? exportQueries('isPage', queries)
    : exportQueries('isNotPage', queries);

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    fetch(
      `${API.infoList}?offset=${(page - 1) * 6}${!newQueries ? '' : newQueries}`
    )
      .then(res => res.json())
      .then(data => {
        let { info_list } = data.result;
        setInfoList([...info_list]);
      });
    scrollTop();
  }, [page, newQueries]);

  useEffect(() => {
    fetch(`${API.infoList}`)
      .then(res => res.json())
      .then(data => {
        let { info_list } = data.result;
        setInfoList([...info_list]);
      });
  }, []);

  return (
    <div>
      {infoList.map((info, index) => {
        return <InfoFeed key={index} info={info} />;
      })}
    </div>
  );
};

export default InfoListForm;
