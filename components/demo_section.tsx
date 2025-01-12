import Image from 'next/image'
import { motion } from 'framer-motion'
import { Twitter, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

const DemoSection = () => {
    const cards = [
        {
            message: "Imagine being able to ask, 'What did I watch on YouTube last month?' and instantly get the answer.",
            image: "/create_a_hyper-realistic_scene_of_a_futuristic_personal_computer_designed_to_be_deeply_integrated_w_9esxnqou2xtjhi51hwex_1.png",
            alt: "Description of image 1"
        },
        {
            message: "we are reimagining the way you interact with your computer. Your computer will be more personal than ever.",
        },
        {
            message: "Your emails has been sent, prs have done, and your code has been pushed. all done for today",
            image: "/a_hyper-realistic_illustration_of_a_personal_computer_automating_repetitive_tasks_the_scene_shows_a_1iuyxmqj8pb5knxf8bak_1.png",
            alt: "Description of image 3"
        }
    ]

    return (
        <div className="min-h-[calc(100vh-50rem)] bg-black text-white">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
                        >
                            <Image
                                src={card.image || '/creation_2.png'}
                                alt={card.alt || 'Default alt text'}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 flex flex-col justify-end p-4">
                                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 text-white">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                                            <span className="text-sm font-medium text-black">arc</span>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between">
                                                <span className="font-medium">arc</span>
                                                <span className="text-black/80 text-sm">now</span>
                                            </div>
                                            <p className="text-sm mt-1 text-black">{card.message}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-white/10 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-4">
                        <h2 className="text-4xl font-extrabold">arc</h2>
                        <div className="flex gap-4">
                            <Link href="https://x.com/HarshalsinghCN" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/harshalsinghcn/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/harshalsinghcn/" className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default DemoSection