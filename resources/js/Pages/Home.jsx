import { Head, usePage } from "@inertiajs/react";

export default function Home({ home }) {
  const { component } = usePage()
    return (
        <div>
        <Head title={component}></Head>
        <h1 class="text-3xl font-bold text-center">Welcome to the Dashboard</h1>
        <p class="text-center">This is your dashboard page.</p>
      </div>
    );
}
