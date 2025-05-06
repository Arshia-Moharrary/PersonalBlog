import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import AppLayout from './Layouts/AppLayout'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`].default;
        
        page.layout ??= (page) => <AppLayout>{page}</AppLayout>;

        return page;

    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})