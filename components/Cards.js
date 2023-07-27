import React from 'react';
import parse from 'html-react-parser';
import * as dayjs from 'dayjs';
var localizedFormat = require('dayjs/plugin/localizedFormat');
dayjs.extend(localizedFormat);

const Cards = (item,title) =>
{
  return (
    <div className='card-container'>
      <div className='cards'>
        <div key={item._firstPublishedAt}>
          <span className='publised'>published: {dayjs(item._firstPublishedAt).format('LLLL')} </span>
          <p style={{ fontSize: "x-large" }}>{item.title || title}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;