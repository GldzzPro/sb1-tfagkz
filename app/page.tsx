import PDFWrapper from '@/components/pdf-wrapper';

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">PDF Generator Demo</h1>
      
      <PDFWrapper className="bg-white p-8 rounded-lg shadow-lg">
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-gray-800">Sample Report</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">Company Details</h3>
              <p className="text-gray-600">Company Name: Acme Corp</p>
              <p className="text-gray-600">Location: New York, NY</p>
              <p className="text-gray-600">Founded: 2020</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">Financial Summary</h3>
              <p className="text-gray-600">Revenue: $1.2M</p>
              <p className="text-gray-600">Growth: 25%</p>
              <p className="text-gray-600">Employees: 50</p>
            </div>
          </div>
          
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-gray-700 mb-4">Project Overview</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </PDFWrapper>
    </main>
  );
}