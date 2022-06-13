import React from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { store } from './store';
import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
            <App />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </Provider>,
    document.getElementById('root'),
);
