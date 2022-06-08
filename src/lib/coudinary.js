export async function search(options = {}) {
    const params = {
        ...options
    }

    if (options.nextCursor) {
      params.next_cursor = options.nextCursor;
      delete params.nextCursor;
    }

    const paramString = Object.keys(params)
        .map( key => `${key}=${encodeURIComponent(params[key])}`)
        .join('&')

    // const results = await fetch(
    //     `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/image?${paramString}`,
    //     {
    //       headers: {
    //         Authorization: `Basic ${Buffer.from(
    //           process.env.CLOUDINARY_API_KEY +
    //             ":" +
    //             process.env.CLOUDINARY_API_SECRET
    //         ).toString("base64")}`,
    //       },
    //     }
    //   ).then((r) => r.json());

    //   return results;

    //wilando 

      const results = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME_WILANDO}/resources/image?${paramString}`,
        {
          headers: {
            Authorization: `Basic ${Buffer.from(
              process.env.CLOUDINARY_API_KEY_WILANDO +
                ":" +
                process.env.CLOUDINARY_API_SECRET_WILANDO
            ).toString("base64")}`,
          },
        }
      ).then((r) => r.json());

      return results;
}

export function mapImageResources(resources) {
    return resources.map((resource) => {
        return {
          id: resource.asset_id,
          title: resource.public_id,
          original: resource.secure_url,
          thumbnail: resource.secure_url,
          width: resource.width,
          height: resource.height,
        };
      });
}