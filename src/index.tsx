import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import "./../node_modules/slick-carousel/slick/slick.css";
import "./../node_modules/slick-carousel/slick/slick-theme.css";
import "./../node_modules/react-tabs/style/react-tabs.css";
import { FocusInputProvider } from "./contexts/FocusInput";
import  RecoilNexus  from 'recoil-nexus';
import 'react-loading-skeleton/dist/skeleton.css'


// Create a client
const queryClient = new QueryClient();
axios.defaults.baseURL = "https://tt-pezq.onrender.com/api/v1/"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // Provide the client to your App
  <QueryClientProvider client={queryClient}>
    <FocusInputProvider>
      <RecoilRoot>
        <RecoilNexus />
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </RecoilRoot>
    </FocusInputProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
