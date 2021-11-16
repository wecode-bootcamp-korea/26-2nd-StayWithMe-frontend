export const connectQuery = (queries, key, prevValue, newValue, isModal) => {
  const check_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;

  let newQuery = `${key}=${newValue}`;

  const curPage = /\bpage=[0-9]\b/i;
  const resetPage = 'page=1';

  if (queries === '') {
    key === 'page'
      ? (queries = `?${newQuery}`)
      : (queries = `?page=1&${newQuery}`);
    return queries;
  }

  if (queries.includes(key)) {
    let targetQuery;
    if (prevValue.match(check_kor)) {
      const encodePrevValue = encodeURI(prevValue);
      targetQuery = `${key}=${encodePrevValue}`;
    } else {
      targetQuery = `${key}=${prevValue}`;
    }

    if (isModal) {
      switch (key) {
        case 'check_in':
          targetQuery =
            /\bcheck_in=\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])\b/;
          break;
        case 'check_out':
          targetQuery =
            /\bcheck_out=\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])\b/;
          break;
        case 'low':
          targetQuery = /\blow=[0-9]+\b/;
          break;
        case 'high':
          targetQuery = /\bhigh=[0-9]+\b/;
          break;
        case 'max_people':
          targetQuery = /\bmax_people=[0-9]+\b/;
          break;
        default:
          break;
      }
      if (key === 'category') {
        if (!newValue) {
          return queries;
        }
        if (queries.includes(`category=${newValue}`)) {
          return queries;
        }
        queries = `${queries}&category=${newValue}`;
        return queries;
      }
    }

    if (key !== 'page') {
      queries = queries
        .replace(curPage, resetPage)
        .replace(targetQuery, newQuery);
      return queries;
    } else {
      targetQuery =
        queries.includes(resetPage) && queries.includes('&')
          ? resetPage
          : targetQuery;
      queries = queries.replace(targetQuery, newQuery);
      return queries;
    }
  } else {
    if (key === 'page') {
      queries = `?${newQuery}&${queries
        .replace('?', '')
        .replace(curPage, resetPage)}`;
      return queries;
    }
    queries = `${queries.replace(curPage, resetPage)}&${newQuery}`;
    return queries;
  }
};

export const exportPageNum = queries => {
  const curPage = /\bpage=[0-9]\b/i;
  const isPageNum = /\bpage=/i;

  const page =
    queries.match(curPage) && queries.match(curPage)[0].replace(isPageNum, '');

  return page;
};

export const exportQueries = (isPage, queries) => {
  if (!queries) return;
  if (isPage === 'isPage') {
    const curPage = /\bpage=[0-9]\b/;
    queries = queries.replace('?', '').replace(curPage, '');
    return queries;
  } else {
    if (queries.includes('search')) queries = decodeURI(queries);

    queries = `&${queries.replace('?', '')}`;
    return queries;
  }
};

export const exportDates = queries => {
  const checkInAllRegExp =
    /\bcheck_in=\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])\b/;
  const checkOutAllRegExp =
    /\bcheck_out=\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])\b/;

  const checkInKeyRegExp = /\bcheck_in=\b/;
  const checkOutKeyRegExp = /\bcheck_out=\b/;
  let check_in = queries
    .match(checkInAllRegExp)[0]
    .replace(checkInKeyRegExp, '');
  let check_out = queries
    .match(checkOutAllRegExp)[0]
    .replace(checkOutKeyRegExp, '');

  return { check_in, check_out };
};
