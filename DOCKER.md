# Verdsoft Docker Deployment

This directory contains Docker configuration for deploying the Verdsoft Next.js application.

## Files

- `Dockerfile` - Multi-stage Docker build configuration
- `.dockerignore` - Files to exclude from Docker build context
- `docker-compose.yml` - Docker Compose configuration for easy deployment
- `next.config.ts` - Updated with `output: 'standalone'` for Docker optimization

## Building the Docker Image

### Option 1: Using Docker directly

```bash
# Build the image
docker build -t verdsoft:latest .

# Run the container
docker run -p 3000:3000 verdsoft:latest
```

### Option 2: Using Docker Compose (Recommended)

```bash
# Build and start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

## Accessing the Application

Once the container is running, access the application at:
- **Local**: http://localhost:3000

## Docker Image Features

✅ **Multi-stage build** - Optimized image size
✅ **Security** - Runs as non-root user (nextjs:nodejs)
✅ **Production-ready** - Standalone Next.js output
✅ **Lightweight** - Based on Alpine Linux
✅ **Fast builds** - Efficient layer caching

## Environment Variables

You can add environment variables in `docker-compose.yml` or pass them during `docker run`:

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  verdsoft:latest
```

## Deployment to Production

### Push to Docker Registry

```bash
# Tag the image
docker tag verdsoft:latest your-registry.com/verdsoft:latest

# Push to registry
docker push your-registry.com/verdsoft:latest
```

### Deploy to Server

```bash
# Pull and run on your server
docker pull your-registry.com/verdsoft:latest
docker run -d -p 3000:3000 --name verdsoft your-registry.com/verdsoft:latest
```

## Troubleshooting

### View container logs
```bash
docker logs verdsoft-app
```

### Access container shell
```bash
docker exec -it verdsoft-app sh
```

### Rebuild without cache
```bash
docker-compose build --no-cache
```

## Notes

- The Dockerfile uses Node.js 18 Alpine for minimal image size
- Static files are served from the standalone build
- The application runs on port 3000 by default
- All unnecessary files are excluded via `.dockerignore` for faster builds
