import { firestore } from '../../firebase/utils';

export const handleAddProduct = (product) => new Promise((resolve, reject) => {
  firestore
    .collection('products')
    .doc()
    .set(product)
    .then(() => {
      resolve();
    })
    .catch((err) => {
      reject(err);
    });
});

export const handleFetchProducts = () => new Promise((resolve, reject) => {
  firestore
    .collection('products')
    .get()
    .then((snapshot) => {
      const productsArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        documentID: doc.id,
      }));
      resolve(productsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

export const handleDeleteProduct = (documentID) => {
  console.log(documentID, 1);
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2);
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};