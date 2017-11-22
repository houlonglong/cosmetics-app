100px的ItemRow
```js
const data = require('../../mock.js').default;
<ItemRow data={data('http://localhost:3000').face} hasTitle={false}/>
```

200px的ItemRow
```js
const data = require('../../mock.js').default;
<ItemRow height={200} data={data('http://localhost:3000').face} />
```

联动的两个ItemRow
```js
const data = require('../../mock.js').default;
initialState = {
  scroll: 0,
};
<div>
  <ItemRow 
    height={300}
    data={data('http://localhost:3000').face}
    setScroll={x => setState({scroll: x})}
    />
  <ItemRow 
    height={200}
    data={data('http://localhost:3000').face}
    scrollOffset={state.scroll}
    />
</div>

```

