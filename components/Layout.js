import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
	return (
		<div className="max-w-2xl mx-auto px-4">
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
