import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GateMockExam() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-rose-100 via-white to-pink-100 p-4">
      <Card className="w-full h-full max-w-6xl max-h-[800px] flex flex-col overflow-hidden shadow-2xl border-0">
        <CardHeader className="flex-shrink-0 bg-gradient-to-r from-rose-600 to-pink-500 text-white py-8">
          <CardTitle className="text-4xl font-bold text-center mb-2">
            GATE Mock Examination 2025
          </CardTitle>
          <p className="text-xl font-medium text-center text-rose-100">
            For Civil Engineering Students
          </p>
        </CardHeader>
        <CardContent className="flex-grow flex flex-col md:flex-row gap-8 p-8 overflow-hidden">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="relative w-full aspect-video rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/gate.png"
                alt="GATE Mock Exam Banner"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            <p className="text-xl text-gray-800 leading-relaxed">
              Prepare for success in the GATE 2025 examination with our comprehensive mock test designed specifically for Civil Engineering students.
            </p>
            <ul className="space-y-3 text-gray-600">
              {[
                "Realistic exam environment",
                "Detailed performance analysis",
                "Covers all Civil Engineering topics",
                "Timed sections to improve speed and accuracy"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex-shrink-0 flex justify-center bg-gray-50 py-6">
          <Button asChild size="lg" className="w-full md:w-auto px-12 py-6 text-lg font-semibold rounded-full bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Link href="https://unstop.com/o/6kSjDdy?lb=gc9wOysF">Register Now</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

