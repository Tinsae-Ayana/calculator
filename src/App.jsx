import { useState } from "react";

export default function App() {
   const [theme, setTheme] = useState(1);
   const ChangeTheme = () => {
      if (theme == 3) {
         setTheme(1);
      } else {
         setTheme(theme + 1);
      }
   };
   return (
      <main
         className={
            theme == 1 ? "themeOneMainBg" : theme == 2 ? "themeTwoMainBg" : "themeThreeMainBg"
         }
      >
         <div className='lg:w-[35%] w-[90%] h-[80%] flex flex-col justify-between'>
            <div className='flex justify-between items-center'>
               <h1
                  className={
                     theme == 1
                        ? "themeOneTextH1"
                        : theme == 2
                        ? "themeTwoTextH1"
                        : "themeThreeTextH1"
                  }
               >
                  Cal
               </h1>
               <div className='flex gap-x-3 items-end'>
                  <h2
                     className={
                        theme == 1
                           ? "themeOneTextH2"
                           : theme == 2
                           ? "themeTwoTextH2"
                           : "themeThreeTextH2"
                     }
                  >
                     THEME
                  </h2>
                  <div
                     className='flex-col justify-center cursor-pointer'
                     onClick={() => ChangeTheme()}
                  >
                     <div
                        className={`flex justify-between ${
                           theme == 1
                              ? "themeOneTextH2"
                              : theme == 2
                              ? "themeTwoTextH2"
                              : "themeThreeTextH2"
                        }`}
                     >
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                     </div>
                     <div
                        className={
                           theme == 1
                              ? "themeOneToggle"
                              : theme == 2
                              ? "themeTwoToggle"
                              : "themeThreeToggle"
                        }
                     >
                        <div
                           className={
                              theme == 1
                                 ? "themeOneRadio"
                                 : theme == 2
                                 ? "themeTwoRadio"
                                 : "themeThreeRadio"
                           }
                        ></div>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className={
                  theme == 1
                     ? "themeOneOutputBg"
                     : theme == 2
                     ? "themeTwoOutputBg"
                     : "themeThreeOutputBg"
               }
            >
               838484
            </div>
            <div
               className={
                  theme == 1 ? "themeOneCalBg" : theme == 2 ? "themeTwoCalBg" : "themeThreeCalBg"
               }
            >
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  7
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  8
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  9
               </div>
               <div
                  className={
                     theme == 1
                        ? "themeOneDelete"
                        : theme == 2
                        ? "themeTwoDelete"
                        : "themeThreeDelete"
                  }
               >
                  DEL
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  4
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  5
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  6
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  +
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  1
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  2
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  3
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  -
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  .
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  0
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  /
               </div>
               <div
                  className={
                     theme == 1 ? "themeOnekey" : theme == 2 ? "themeTwokey" : "themeThreekey"
                  }
               >
                  x
               </div>
               <div
                  className={
                     theme == 1 ? "themeOneReset" : theme == 2 ? "themeTwoReset" : "themeThreeReset"
                  }
               >
                  RESET
               </div>
               <div
                  className={
                     theme == 1 ? "themeOneEqual" : theme == 2 ? "themeTwoEqual" : "themeThreeEqual"
                  }
               >
                  =
               </div>
            </div>
         </div>
      </main>
   );
}
