import { takeLatest, call, put, all } from "@redux-saga/core/effects";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.util";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./shop.actions";
import ShopActionTypes from "./shop.types";

export function* fetchCollectionAsync() {
  yield console.log("YES");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
  //   collectionRef
  //     .get()
  //     .then((snapshot) => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //       dispatch(fetchCollectionsSuccess(collectionsMap));
  //     })
  //     .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}
export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
