import { type NextRequest } from "next/server";
import { categories } from "@/_mock/categories";

type Props = {
  params: { [key: string]: string };
};

export async function GET(
  request: NextRequest,
  { params }: Props,
) {
  // const category = categories.find(
  //   (category) => category.name === params.categoryName,
  // );
  // if (!category) {
  //   return Response.json({ message: "Not Found" }, { status: 404 });
  // }
  const categoryName = params.categoryName;

  const searchParams = request.nextUrl.searchParams;
  const searchParamsObj = Object.fromEntries(searchParams);

  return Response.json({ categoryName, searchParamsObj });
}
