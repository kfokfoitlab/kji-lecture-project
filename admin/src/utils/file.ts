import { FileResponseDto } from "@/@swagger/data-contracts";

export async function fileDownload({
  path,
  name,
  type,
  seq,
}: FileResponseDto): Promise<boolean> {
  return new Promise(async (res, rej) => {
    try {
      const data = await fetch(`${process.env.VITE_API_URL}/app/file/${seq}`, {
        method: "post",
      });

      if (!data.ok) {
        throw new Error();
      }

      const blob = await data.blob();

      const fileBlob = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileBlob;
      link.setAttribute("download", name);
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(fileBlob);

      res(true);
    } catch (error) {
      rej(error);
    }
  });
}
