import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          setItem(initialValue);
        } else {
          const parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 5000);
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };


//   const defaultTodos = [
//   {text: "Dufenshmil y asociados", completed: true},
//   {text: "T-rex vs Godzilla", completed: false},
//   {text: "Batman vs Iron man ", completed: false},
//   {text: "Perro vs Tortuga", completed: false},
//   {text: "El gato volador  ", completed: false},
//   {text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque turpis eget gravida. Fusce in suscipit libero. Aliquam erat volutpat. Curabitur dignissim turpis nec quam iaculis, sed euismod ex feugiat. In at libero vel dolor cursus blandit. Nullam placerat turp", completed: false},
//   ]
//  localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos))
  //localStorage.removeItem("TODOS_V1")

