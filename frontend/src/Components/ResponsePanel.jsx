export default function ResponsePanel({ response }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-md shadow-md mt-4">
      <p className="italic text-blue-300">{response.quote}</p>
      <p className="mt-2 text-green-400">{response.module}</p>
      <p className="mt-1 text-purple-300">{response.comment}</p>
    </div>
  );
}
