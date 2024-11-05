import { FC, useEffect, useState } from "react";
import { ListView } from "ino-ui-tv";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./listview.module.scss";
import InoImage from "@/components/InoImage";
import axios from "axios";

const ListViewComponent: FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const apiKey = "30888e8f271f1698dcfb0228f589bec1"; // Replace with your TMDb API key
      const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&vote_count.gte=100&per_page=10`;

      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        getMovieImages(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const getMovieImage = async (movieId: string) => {
    const apiKey = "30888e8f271f1698dcfb0228f589bec1"; // Replace with your TMDb API key
    const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;
    const response = await axios.get(apiUrl);
    return response.data.posters[0].file_path;
  };

  const getMovieImages = async (movies: any[]) => {
    const movieImages = await Promise.all(
      movies.map(async (movie) => {
        const image = await getMovieImage(movie.id);
        return { image, id: movie.id, title: movie.title };
      })
    );
    setMovies(movieImages);
  };

  const propsData = [
    {
      name: "`id`",
      type: "string",
      description: "Unique identifier for the ListView component.",
    },
    {
      name: "`uniqueKey`",
      type: "string",
      description: "A unique key for the ListView instance.",
    },
    {
      name: "`itemsTotal`",
      type: "number",
      description: "Total number of items in the list.",
    },
    {
      name: "`itemsCount`",
      type: "number",
      description: "Number of items to display at once.",
    },
    {
      name: "`listType`",
      type: "string",
      description: "Type of list layout (e.g., 'horizontal').",
    },
    {
      name: "`itemWidth`",
      type: "number",
      description: "Width of each item in the list.",
    },
    {
      name: "`itemHeight`",
      type: "number",
      description: "Height of each item in the list.",
    },
    {
      name: "`isActive`",
      type: "boolean",
      description: "Indicates if the ListView is active.",
    },
    {
      name: "`buffer`",
      type: "number",
      description: "Number of items to buffer for smooth scrolling.",
    },
    {
      name: "`debounce`",
      type: "number",
      description: "Debounce time for scroll events.",
    },
    {
      name: "`nativeControle`",
      type: "boolean",
      description: "Enables native control for the ListView.",
    },
    {
      name: "`renderItem`",
      type: "function",
      description: "Function to render each item in the list.",
    },
    {
      name: "`data`",
      type: "array",
      description: "Array of data items to be displayed.",
    },
    {
      name: "`onBackScrollIndex`",
      type: "number",
      description: "Index to scroll back to when navigating back.",
    },
  ];

  const codeString = `import { ListView } from "ino-ui-tv";

  const items = [
    { id: 1, name: "Item 1", image: "https://placehold.co/400" },
    { id: 2, name: "Item 2", image: "https://placehold.co/400" },
    { id: 3, name: "Item 3", image: "https://placehold.co/400" },
    { id: 4, name: "Item 4", image: "https://placehold.co/400" }
  ];

  <ListView
    id="example_list"
    uniqueKey="example-list"
    itemsTotal={items.length}
    itemsCount={2}
    listType="horizontal"
    itemWidth={24}
    itemHeight={27}
    isActive={true}
    buffer={5}
    debounce={100}
    nativeControle={true}
    renderItem={({ index, style, isActive, item }) => (
      <div style={style} key={item.id}>
        <img src={item.image} alt={item.name} />
        <p>{item.name}</p>
      </div>
    )}
    data={items}
    onBackScrollIndex={0}
  />`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        ListView Component Example
      </h2>
      <Tabs defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <div className="bg-amber-100 rounded-lg p-4 overflow-hidden">
            <ListView
              id="example_list"
              uniqueKey="example-list"
              itemsTotal={movies.length}
              itemsCount={1}
              listType="horizontal"
              itemWidth={23}
              itemHeight={27}
              isActive={true}
              buffer={5}
              arrows={{ show: true }}
              // edgeScroll={{
              //   enabled: true,
              //   interval: 800,
              //   startDelay: 500,
              // }}
              gap={1}
              // debounce={200}
              nativeControle={true}
              renderItem={({ index, style, isActive, item }) => {
                console.log(item);
                return (
                  <div
                    style={style}
                    key={item.id + index}
                    className={`${styles.item} ${
                      isActive ? styles.active : ""
                    }`}
                  >
                    <div className="">
                      <InoImage
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${item.image}`}
                        alt={item.title}
                      />
                    </div>
                    <p>{item.title}</p>
                  </div>
                );
              }}
              data={movies}
              onBackScrollIndex={0}
            />
          </div>
        </TabsContent>

        <TabsContent value="code">
          <div className="relative bg-gray-900 p-4 rounded-lg mt-6">
            <button
              onClick={handleCopy}
              className="absolute top-12 right-12 p-1 bg-white rounded hover:bg-gray-300"
            >
              <Copy className="w-5 h-5" />
            </button>
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
        </TabsContent>
      </Tabs>

      <Table className="mt-6 border border-gray-200 rounded-lg shadow-md">
        <TableCaption className="text-gray-500">ListView Props</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="bg-blue-200 font-semibold text-gray-700">
              Prop/Callback
            </TableHead>
            <TableHead className="bg-blue-200 font-semibold text-gray-700">
              Type
            </TableHead>
            <TableHead className="bg-blue-200 font-semibold text-gray-700">
              Description
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {propsData.map((prop) => (
            <TableRow
              key={prop.name}
              className="hover:bg-gray-50"
            >
              <TableCell className="p-4 border-b">{prop.name}</TableCell>
              <TableCell className="p-4 border-b">{prop.type}</TableCell>
              <TableCell className="p-4 border-b">{prop.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ListViewComponent;
