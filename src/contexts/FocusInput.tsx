import { createContext, useState, useEffect } from "react";

// when input focus i want to menu bottom in mobile device hidden
interface craeteContext {
  focus: boolean;
  setFocus?:
    | React.Dispatch<React.SetStateAction<boolean>>
    | any;
}

const focusInputContext = createContext<craeteContext>({
  focus: false,
});

interface props {
  children: React.ReactNode;
}
const FocusInputProvider = ({ children }: props) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {

    const listener = () => {
      const MIN_KEYBOARD_HEIGHT = 300; // N.B.! this might not always be correct
      const isMobile = window.innerWidth < 768;
      const isKeyboardOpen =
        isMobile &&
        window.screen.height - MIN_KEYBOARD_HEIGHT >
          window.visualViewport.height;

      setFocus(isKeyboardOpen);
    };

    window.visualViewport.addEventListener(
      "resize",
      listener
    );
  }, []);

  return (
    <focusInputContext.Provider value={{ focus, setFocus }}>
      {children}
    </focusInputContext.Provider>
  );
};

export { focusInputContext, FocusInputProvider };
