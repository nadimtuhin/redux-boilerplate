# redux-boilerplate

A starter structure for Redux applications with redux-saga, immutability-helper, and Redux DevTools wired up out of the box.

## Why

Setting up Redux from scratch involves the same five files every time: store, root reducer, saga
middleware, compose enhancers for DevTools, and initial state. This repo collapses that setup into a
copy-paste starting point so you can skip straight to writing domain logic.

## What's included

- Redux store configured with middleware pipeline
- `redux-saga` middleware integrated and running
- Redux DevTools Extension support via `composeEnhancers`
- `immutability-helper` (`u`) available in reducers
- Sample reducer with spec file
- Sample saga with watcher pattern
- Sample action creators
- Reselect-ready selectors structure

## Project structure

```
src/
  actions/
    sampleActionCreators.js   # action creator examples
  constants/
    actionTypes.js            # action type string constants
    terms.js                  # shared string constants
  redux/
    middlewares/index.js      # middleware array + sagaMiddleware export
    reducers/
      rootReducer.js          # combineReducers root
      sampleReducer.js        # example reducer using immutability-helper
      sampleReducer.spec.js   # reducer unit tests
    sagas/
      index.js                # saga registry
      appSaga.js              # example saga with takeEvery watcher
    store/
      composeEnhancers.js     # DevTools compose with production fallback
      index.js                # store creation entry point
      initialState.js         # initial Redux state shape
      state.stub.js           # test state stub
  selectors/
    index.js                  # selector entry point
    selectors.spec.js         # selector unit tests
```

## Installation

```sh
git clone https://github.com/nadimtuhin/redux-boilerplate.git
cd redux-boilerplate
npm install
```

## Usage

Import the store into your application entry point:

```js
import store from './src/redux/store';
```

Add new domain logic:

1. Add action type constants to `src/constants/actionTypes.js`
2. Create an action creator in `src/actions/`
3. Add a case to the relevant reducer, or create a new reducer and register it in `rootReducer.js`
4. Add a saga in `src/redux/sagas/` and register it in `src/redux/sagas/index.js`
5. Add selectors to `src/selectors/`

## Redux DevTools

Install the [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools) for your browser.
The `composeEnhancers` wrapper enables it in development and falls back to plain `compose` in production.

## Testing

Reducer and selector spec files use the `sampleReducer.spec.js` / `selectors.spec.js` pattern.
Wire them into your test runner of choice (Jest, Mocha, etc.).

## Contributing

Fork, branch, and open a pull request. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.
