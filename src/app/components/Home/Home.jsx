import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const ITEMS_PER_PAGE = 8; // Adjust as needed

export default function Home({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [active, setActive] = React.useState(1);

  const next = () => {
    if (active === 4) return;
    setCurrentPage((prev) => prev + 1);
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setCurrentPage((prev) => prev - 1);

    setActive(active - 1);
  };

  const downloadRepoZip = (repo) => {
    window.location.href = `https://github.com/abuanwar072/${repo}/archive/refs/heads/master.zip`;
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedItems = data?.slice(startIndex, endIndex);

  return (
    <section className="">
      <div className=" flex  flex-col space-y-8 items-center justify-center mt-14">
        <div>
          <img
            src={data[0]?.owner.avatar_url}
            className=" rounded-full h-[6rem] w-[6rem] p-2   shadow-md  bg-purple-700 "
            alt="avater"
          />
        </div>

        <div className="tile">
          <h1 className=" text-xl font-bold  uppercase">abuanwar072</h1>
        </div>
      </div>
      {/* ============ Reops =============== */}

      <section className="repo__card mt-[4rem]  container mx-auto  grid grid-cols-1 lg:grid-cols-2 gap-y-8 xl:grid-cols-3  2xl:grid-cols-4 items-center justify-items-center">
        {displayedItems?.map((repo) => (
          <Card key={repo.id} className="mt-6  w-[18rem] cutstomShad ">
            <CardBody>
              <Typography
                variant="h5"
                color="blue-gray"
                className="mb-2 text-center"
              >
                {repo.name}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 text-center">
              <Button onClick={() => downloadRepoZip(repo.name)}>
                Download Zip
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* =========Pagination======== */}

      <section className="">
        <div className="flex items-center  justify-center mt-16 gap-8 container mx-auto">
          <IconButton
            size="sm"
            variant="outlined"
            color="blue-gray"
            onClick={prev}
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
          <Typography color="gray" className="font-normal">
            Page <strong className="text-blue-gray-900">{active}</strong> of{" "}
            <strong className="text-blue-gray-900">4</strong>
          </Typography>
          <IconButton
            size="sm"
            variant="outlined"
            color="blue-gray"
            onClick={next}
            disabled={active === 4}
          >
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </IconButton>
        </div>
      </section>
    </section>
  );
}
