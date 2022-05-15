import { Context } from './Context';
import { useState, useContext, useEffect } from 'react';

const Sort = () => {
  // sort settings
  const [sort, setSort] = useState({
    search: '',
    alphabetically: false,
    manaCost: false,
    colorless: false,
    white: false,
    blue: false,
    red: false,
    black: false,
    green: false,
  });
  // used at end of useEffect to alter 'query' state in <Landing />'s <CardList />
  const { setQuery, setScroll } = useContext(Context);

  // generates a new 'query' in <Landing /> upon any value change via 'setQuery'
  useEffect(() => {
    let newQuery = 'http://localhost:8000/cards';
    if (sort.search !== '') newQuery += `?q=${sort.search}`;
    let prevSort = false;
    if (sort.alphabetically) {
      newQuery += '?_sort=cardName';
      prevSort = true;
    }
    if (sort.manaCost) {
      newQuery += '?_sort=cardManaCost';
      prevSort = true;
    }
    if (prevSort) newQuery += '&';
    if (
      sort.colorless ||
      sort.white ||
      sort.blue ||
      sort.red ||
      sort.black ||
      sort.green
    ) {
      prevSort
        ? (newQuery += 'cardColorIdentity=')
        : (newQuery += '?cardColorIdentity=');
    }

    let prevColor = false;
    for (let i = 0; i <= 5; i++) {
      if (sort.colorless && i === 0) {
        newQuery += 'Colorless';
        prevColor = true;
      } else if (sort.white && i === 1) {
        prevColor ? (newQuery += '/White') : (newQuery += 'White');
        prevColor = true;
      } else if (sort.blue && i === 2) {
        prevColor ? (newQuery += '/Blue') : (newQuery += 'Blue');
        prevColor = true;
      } else if (sort.red && i === 3) {
        prevColor ? (newQuery += '/Red') : (newQuery += 'Red');
        prevColor = true;
      } else if (sort.black && i === 4) {
        prevColor ? (newQuery += '/Black') : (newQuery += 'Black');
        prevColor = true;
      } else if (sort.green && i === 5) {
        prevColor ? (newQuery += '/Green') : (newQuery += 'Green');
      }
    }
    setQuery(newQuery);
  }, [sort, setQuery]);

  return (
    <div className="sort">
      <label className="sort-category">Search:</label>
      <input
        type="text"
        className="sort-search"
        value={sort.search}
        onChange={(e) => {
          setScroll(null);
          setSort({
            ...sort,
            search: e.target.value,
            alphabetically: false,
            manaCost: false,
            colorless: false,
            white: false,
            blue: false,
            red: false,
            black: false,
            green: false,
          });
        }}
      />
      <label className="sort-category">Sort:</label>
      <label>Alphabetically</label>
      <input
        type="checkbox"
        checked={sort.alphabetically}
        onChange={() => {
          setScroll(null);
          setSort({
            ...sort,
            search: '',
            manaCost: false,
            alphabetically: !sort.alphabetically,
          });
        }}
      />
      <label>Mana Cost</label>
      <input
        type="checkbox"
        checked={sort.manaCost}
        onChange={() => {
          setScroll(null);
          setSort({
            ...sort,
            search: '',
            manaCost: !sort.manaCost,
            alphabetically: false,
          });
        }}
      />
      <label className="sort-color">Color Identity:</label>
      <label>Colorless</label>
      <input
        type="checkbox"
        checked={sort.colorless}
        onChange={() => {
          setScroll(null);
          setSort({ ...sort, search: '', colorless: !sort.colorless });
        }}
      />
      <label>White</label>
      <input
        type="checkbox"
        checked={sort.white}
        onChange={() => {
          setScroll(null);
          setSort({ ...sort, search: '', white: !sort.white });
        }}
      />
      <label>Blue</label>
      <input
        type="checkbox"
        checked={sort.blue}
        onChange={() => {
          setScroll(null);
          setSort({ ...sort, search: '', blue: !sort.blue });
        }}
      />
      <label>Red</label>
      <input
        type="checkbox"
        checked={sort.red}
        onChange={() => {
          setScroll(null);
          setSort({ ...sort, search: '', red: !sort.red });
        }}
      />
      <label>Black</label>
      <input
        type="checkbox"
        checked={sort.black}
        onChange={() => {
          setScroll(null);
          setSort({ ...sort, search: '', black: !sort.black });
        }}
      />
      <label>Green</label>
      <input
        type="checkbox"
        checked={sort.green}
        onChange={() => {
          setScroll(null);
          setSort({ ...sort, search: '', green: !sort.green });
        }}
      />
    </div>
  );
};

export default Sort;
