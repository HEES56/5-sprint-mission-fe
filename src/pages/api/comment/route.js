export async function GET(req) {
  const id = req.id;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/comments/articles/${id}`
  );
  const data = await response.json();

  return Response.json(data);
}

export async function GET(req) {
  const id = req.id;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/comments/${id}`
  );
  const data = await response.json();

  return Response.json(data);
}

export async function POST(req) {
  const { content, articleId } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/comments/articles/${articleId}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
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

export async function PATCH(req) {
  const { content, articleId } = await req.json();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ARL_URL}/comments/articles/${articleId}`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    }
  );

  const data = await response.json();
  return Response.json(data);
}
