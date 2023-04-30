import { useState, useEffect } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";



export default function Navigation() {
    
    const [bgColor, setBgColor] = useState("bg-main"); // set initial background color
    const handleScroll = () => {
        if (window.pageYOffset > 0) {
            setBgColor("bg-main_2"); // change background color to blue when user scrolls down
        } else {
            setBgColor("bg-main"); // change back to gray when user is at the top
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // add scroll event listener
        return () => {
          window.removeEventListener('scroll', handleScroll); // remove event listener on cleanup
        };
      }, []);



	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className={`${bgColor} transition-colors duration-500 sticky py-4 top-0 z-10 `}>
			<nav
				className="px-8 md:px-16 lg:px-28 flex items-center justify-between p-6"
				aria-label="Global"
			>
				<div className="flex flex-col">
					<a href="#" className="-m-1.5 p-1.5">
						<h1 className="font-dm text-center sm:text-left text-tan text-3xl">
							Harman.
						</h1>
					</a>
					<Popover.Group className="hidden lg:flex lg:gap-x-4 font-ubuntu">
						<a
							href="#ABOUT"
							className="text-greenish hover:text-white transition duration-500"
						>
							About
						</a>
						<a
							href="#"
							className="text-greenish hover:text-white transition duration-500"
						>
							Projects
						</a>
						<a
							href="#"
							className="text-greenish hover:text-white transition duration-500"
						>
							Blog
						</a>
					</Popover.Group>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-tan"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<div className="hidden md:inline">
						<a
							className="bg-accent px-8 py-4 rounded-md text-main text-md font-medium"
							href="#Contact"
						>
							Contact Me
						</a>
					</div>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-main_2 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<h1 className="font-dm text-center sm:text-left text-tan text-3xl">
								Harman.
							</h1>
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-tan"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root ">
						<div className="-my-6 divide-y divide-gray-500/10 ">
							<div className="space-y-2 py-6 ">
								<a
									href="#ABOUT"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tan hover:bg-main"
								>
									About
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tan hover:bg-main"
								>
									Projects
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-tan hover:bg-main"
								>
									Blog
								</a>
							</div>
							<div className="py-6">
								<div className="hidden md:inline">
									<a
										className="bg-accent px-8 py-4 rounded-md text-main text-md font-medium"
										href="#Contact"
									>
										Contact Me
									</a>
								</div>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
