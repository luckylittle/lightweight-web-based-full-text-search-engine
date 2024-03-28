# Lightweight full-text search for flat file

This is a lightweight web-based full-text search engine that works directly on a flat text file. The search results are displayed dynamically as you enter your query. It is based on `nodejs-18` + `express-4`. It is suprisingly fast even on large text files!

For an easier setup & containerized deployments, it's also available in Podman/Docker packaging.

## Instructions

```bash
# Edit/replace the `data.txt` file with your own, before packaging it into a container!

# Build
podman build -t fulltext .

# Run
podman run -d --name fulltext -p 3000:3000 fulltext
firefox http://127.0.0.1:3000/

# Cleanup
podman stop fulltext
podman rm fulltext
podman rmi fulltext
```

## Author

lmaly@redhat.com
