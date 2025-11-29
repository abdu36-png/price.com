import { Activity,Instagram, Linkedin, Github, Twitter } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="px-4 md:px-8 py-12 mb-10 md:mb-0 mt-8">
        {/* Floating Rounded Box with overflow-hidden for the watermark */}
        <div className="relative bg-black rounded-4xl shadow-xl p-8 md:p-12 border border-gray-100 overflow-hidden">
            
            {/* THE LARGE WATERMARK TEXT */}
            {/* This creates the "Graphy" grey text effect from the image */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-[8rem] md:text-[14rem] lg:text-[18rem] font-black text-gray-800 select-none pointer-events-none whitespace-nowrap z-0 leading-none tracking-tighter">
                eComm.
            </div>

            {/* Content (z-10 to sit above the watermark) */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12">
                
                {/* Brand Column */}
                <div className="md:col-span-1 space-y-6">
                    {/* Logo Area */}
                    <div className="flex items-center gap-3">
                        <div className="bg-black text-white p-2 rounded-xl shadow-lg">
                            <Activity className="h-6 w-6" />
                        </div>
                        <span className="text-2xl font-black tracking-tighter text-gray-900">eComm.</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-gray-500 leading-relaxed">
                        eComm empowers shoppers to find the best deals and discover new trends. Join our community and start saving today.
                    </p>
                    
                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"><Instagram className="h-5 w-5" /></a>
                        <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="p-2 bg-gray-50 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-all"><Github className="h-5 w-5" /></a>
                    </div>
                </div>

                {/* Links Columns */}
                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Product</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Features</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Integrations</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Resources</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Tutorials</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Support</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-gray-500">
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">About</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-indigo-600 transition-colors">Partners</a></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="relative z-10 border-t border-gray-100 my-10"></div>

            {/* Bottom Section */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
                <p>© 2025 eComm Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
                    <a href="#" className="hover:text-gray-900 transition-colors">Cookies Settings</a>
                </div>
            </div>
        </div>
    </footer>
  );
};
