import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalSotrage";
// Define the type for the props of ShoppingCartProvider
type ShoppingCartProviderProps = {
  children: ReactNode;
};
// Define the structure of a CartItem
type CartItem = {
  id: string;
  quantity: number;
};
// Define the structure of the ShoppingCartContext
type ShoppingCartContext = {
  getItemQuantity: (id: string) => number; // Change the parameter type to 'string'
  increaseCartQuantity: (id: string) => void; // Change the parameter type to 'string'
  decreaseCartQuantity: (id: string) => void; // Change the parameter type to 'string'
  removeFromCart: (id: string) => void; // Change the parameter type to 'string'
  clearCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

// Create a context for the shopping cart and provide an initial empty object
const ShoppingCartContext = createContext({} as ShoppingCartContext);

// Custom hook to access the shopping cart context
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  // Initialize cartItems using local storage and an empty array
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  // Calculate the total quantity of items in the cart
  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  // Function to get the quantity of an item by its id
  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id: string) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity,
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
