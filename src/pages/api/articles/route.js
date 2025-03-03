export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 10;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/articles?page=${page}&pageSize=${pageSize}`
  );
  const data = await response.json();

  return Response.json(data);
}

export async function GET(req) {
  const id = req.id;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/articles/${id}`
  );
  const data = await response.json();

  return Response.json(data);
}

export async function POST(req) {
  const { title, content } = await req.json();

  const response = await fetch(`${process.env.NEXT_PUBLIC_ARL_URL}/articles`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title,
      content,
      image: [],
    }),
  });

  const data = await response.json();
  return Response.json(data);
}

export async function PATCH(req) {
  const { title, content, articleId } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/comments/articles/${articleId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, image: [] }),
    }
  );

  const data = await response.json();
  return Response.json(data);
}

export async function DELETE(req) {
  const { articleId } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/comments/articles/${articleId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );

  const data = await response.json();
  return Response.json(data);
}
