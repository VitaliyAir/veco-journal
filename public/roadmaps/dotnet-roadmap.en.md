# .NET Developer Roadmap — Interview Checklist (.NET 10)
*Structure adapted and extended from DotNet-Developer-Roadmap, with the depth expected at Senior/Lead level.*

## Self-assessment marks
- [ ] Deep knowledge of every detail and nuance, extensive hands-on experience.
- [ ] Confident, apply it easily in practice.
- [ ] Know it in theory.
- [ ] May have heard of it, but barely see why it matters.

---

## 0. The .NET Ecosystem and Runtime
- [ ] **History and standards:** How the platform evolved: .NET Framework, .NET Core, .NET 5+ through today's .NET 10. What .NET Standard was for, and why it was retired.
- [ ] **The runtime (CLR):** How the virtual machine works, how managed code executes, and how Common Intermediate Language (CIL) is compiled into native code.
- [ ] **JIT compilation:** How RyuJIT works. Tiered compilation (Tier 0, Tier 1). Dynamic profile-guided optimization (Dynamic PGO).
- [ ] **Memory management (Garbage Collector):**
    - GC algorithms and collection phases (Mark, Plan, Sweep, Compact).
    - Generations (Gen 0, Gen 1, Gen 2).
    - Large heaps: the Large Object Heap (LOH) and its fragmentation pitfalls, the Pinned Object Heap (POH), and the Frozen Heap in recent .NET versions.
    - GC modes: Server vs Workstation, concurrent vs non-concurrent.

---

## 1. The C# Language and Advanced Features

### 1.1. Core syntax and the type system
- [ ] **OOP fundamentals:** Classes, interfaces, abstract classes. How inheritance and polymorphism work, including the virtual method table (vtable).
- [ ] **Data types:** Value vs reference types. Structs vs classes. Boxing and unboxing: how they work and what they silently cost.
- [ ] **Keywords and modifiers:** Access modifiers, `static`, `new` (member hiding), `this`, indexers. Constructors: `base()` and `this()` chaining.
- [ ] **Modern C# syntax:** Nullable reference types, records, advanced pattern matching.

### 1.2. Advanced memory work and high-performance code
- [ ] **Memory abstractions:** Working with `Span<T>` and `Memory<T>` to cut allocations.
- [ ] **Special-purpose structs:** What `ref struct` can and cannot do. Allocating on the stack with `stackalloc`.
- [ ] **Unmanaged resources:** `IDisposable`, the Dispose pattern, finalizers, and `SafeHandle`.

### 1.3. Functional features and metaprogramming
- [ ] **Collections and generics:** How the built-in collections are built, generics and their constraints, covariance and contravariance in interfaces and delegates.
- [ ] **Functional constructs:** Lambda expressions, the built-in `Action` and `Func` delegates.
- [ ] **Closures:** How closures work under the hood, the hidden classes the compiler generates, and the heap allocations they quietly introduce.
- [ ] **Expression trees and LINQ:** How expression trees are structured, how LINQ executes (deferred execution, `IEnumerable` vs `IQueryable`).
- [ ] **Compilation and optimization:** Source generators, publishing with Native AOT, and trimming.

---

## 1.5. Concurrency and Multithreading

### 1.5.1. Asynchronous programming
- [ ] **Async fundamentals:** `Task` and `ValueTask` internals, and when `ValueTask` actually saves an allocation.
- [ ] **The state machine:** How `async/await` works under the hood and how the compiler rewrites your method into a state machine.
- [ ] **Synchronization context:** The role of `SynchronizationContext` and `TaskScheduler`. When `.ConfigureAwait(false)` matters in libraries and server code.

### 1.5.2. Thread management and synchronization
- [ ] **OS threads:** Working with the `Thread` class. How the thread pool is architected.
- [ ] **Thread pool pitfalls:** Thread pool starvation caused by blocking on async code (`.Result`, `.Wait()`). How work-stealing keeps the pool busy.
- [ ] **Operation types:** The difference between I/O-bound and CPU-bound work, and why it matters for the pool.
- [ ] **Synchronization primitives:** `lock` (`Monitor`), `Mutex`, `SemaphoreSlim`, `CountdownEvent`, `Barrier`.
- [ ] **Lock-free constructs:** Atomic operations with `Interlocked`, `volatile` fields, and the thread-safe collections in `System.Collections.Concurrent`.

---

## 2. Architecture, Design Principles and Patterns

### 2.1. Engineering practices and principles
- [ ] **Core principles:** SOLID (with a real grasp of Liskov substitution), DRY, KISS, YAGNI, the Law of Demeter.
- [ ] **Architectural approaches:** Composition over inheritance. Applying the Gang of Four patterns.
- [ ] **Model-driven development:** Domain-driven design (aggregates, value objects, entities, ubiquitous language) and TDD.

### 2.2. Application architecture styles
- [ ] **Code structure:** Clean Architecture, Modular Monolith, Vertical Slice Architecture.
- [ ] **Data isolation:** Implementing multitenancy at the application and database level.

### 2.3. Patterns for distributed and event-driven systems
- [ ] **Separating operations:** CQRS (command/query responsibility segregation), with or without separate databases.
- [ ] **Event-driven approaches:** Event Sourcing. Transactional Outbox and Inbox for reliable message delivery.
- [ ] **Distributed transactions:** The Saga pattern — orchestration versus choreography.
- [ ] **Data consistency:** Consistency models in distributed systems (eventual consistency). The actor model.

---

## 3. ASP.NET Core and Web Technologies

### 3.1. Networking fundamentals and hosting
- [ ] **Protocols and transport:** HTTP/1.1, HTTP/2, HTTP/3 (QUIC), TLS 1.3, mutual TLS (mTLS). How TCP differs from UDP.
- [ ] **Hosting infrastructure:** How Kestrel works, tuning connection limits and request sizes. Using YARP (Yet Another Reverse Proxy) as an API gateway.

### 3.2. The middleware pipeline
- [ ] **Request lifecycle:** The anatomy of `HttpContext` and the `RequestDelegate` chain. Convention-based middleware versus `IMiddleware` factories.
- [ ] **Built-in pipeline components:**
    - Routing (endpoint routing, dynamic routing, route constraints).
    - CORS (policies, preflight OPTIONS requests).
    - Rate limiting (token bucket, fixed window, sliding window, concurrency limiters).
    - Health checks (liveness, readiness, startup probes).

### 3.3. Designing and validating APIs
- [ ] **REST architecture:** REST constraints and the Richardson Maturity Model. Pagination (offset vs cursor) and API versioning strategies.
- [ ] **Implementation styles:** Controllers versus Minimal APIs, including the performance difference. FastEndpoints and the REPR pattern (request–endpoint–response).
- [ ] **Validation:** Validation in .NET 10, FluentValidation integration, and generating RFC 7807 (ProblemDetails) error responses automatically.
- [ ] **Data contracts:** gRPC (`.proto` files, Protobuf, bidirectional streaming, interceptors) versus GraphQL (queries, mutations, subscriptions, federation, solving N+1).

### 3.4. Dependency injection, configuration and security
- [ ] **Dependency injection:** Service lifetimes (transient, scoped, singleton). Captive dependencies — why injecting a short-lived service into a singleton is dangerous. Advanced assembly scanning with Scrutor.
- [ ] **Configuration:** The Options pattern (`IOptions`, `IOptionsSnapshot`, `IOptionsMonitor`) and validating configuration at startup.
- [ ] **Security:** Authentication and authorization flows. OAuth2 and OpenID Connect (OIDC), authorization code with PKCE, client credentials. Keycloak integration. Authorization policies (RBAC and ABAC).

---

## 4. Databases and Object-Relational Mappers (ORM)

### 4.1. Relational databases and low-level access
- [ ] **Indexes and optimization:** How indexes work (B-Tree, Hash, GiST/GIN, clustered vs non-clustered), reading query plans with `EXPLAIN ANALYZE`, gathering statistics.
- [ ] **Transactions:** ACID properties, transaction isolation levels, and the anomalies they prevent (dirty read, non-repeatable read, phantom read, serialization anomaly).
- [ ] **Scaling:** Vertical and horizontal scaling. Replication (synchronous vs asynchronous, replication lag), partitioning and sharding.
- [ ] **Vector search:** Extensions for AI workloads — pgvector in PostgreSQL, native vector search in SQL Server 2025 / EF Core 11.

### 4.2. Entity Framework Core (advanced)
- [ ] **EF Core architecture:** How `DbContext` and context pooling (`DbContextPool`) work. The change tracker: snapshot-based versus proxy-based.
- [ ] **Loading data:** Eager loading (`Include`), explicit loading, and lazy loading (and the hidden allocations it brings). Shaping results with `.Select()` projections.
- [ ] **Optimizing LINQ queries:** `AsNoTracking` and `AsNoTrackingWithIdentityResolution`. Split queries to avoid the cartesian explosion, and global query filters.
- [ ] **Data modeling:** Inheritance mapping strategies (TPH, TPT, TPC). Owned entities, value objects via value converters, and keyless entities.
- [ ] **Locking and system tables:** JSON columns and temporal (system-versioned) tables. Managing concurrent access: optimistic concurrency (`ConcurrencyCheck`) versus pessimistic.

### 4.3. Micro-ORMs and lightweight data access
- [ ] **Dapper:** Fast mapping, custom `TypeHandlers`, `QueryMultiple` for several result sets, buffered versus unbuffered reads.
- [ ] **ADO.NET:** Working directly with `DbConnection`, `DbCommand` and `DbDataReader`. How connection pooling works and how to tune it.

---

## 5. Distributed Interaction and Messaging

### 5.1. Synchronous interaction and real-time
- [ ] **WebSockets and real-time:** How SignalR works (transports: WebSockets, Server-Sent Events, long polling; hubs; MessagePack) and how to scale it horizontally with a Redis backplane.

### 5.2. Asynchronous messaging (patterns and concepts)
- [ ] **Core patterns:** Message queues (point-to-point) versus publish-subscribe. The smart endpoint, dumb pipe principle.
- [ ] **Fault tolerance:** Delivery guarantees (at-most-once, at-least-once, exactly-once). Error handling: retries and dead letter queues (DLQ / dead letter exchange).
- [ ] **Idempotency:** Building an idempotent consumer with a deduplication key.

### 5.3. Apache Kafka (the distributed commit log)
- [ ] **Architecture:** Topics, partitions, brokers, the controller. How data is stored on disk (log segments).
- [ ] **Producers and consumers:** Partitioning keys and consumer groups. Offset management: auto-commit versus manual commit.
- [ ] **Runtime behaviour:** Rebalancing (cooperative sticky, range strategies). Exactly-once semantics with the idempotent producer and the transactional API.

### 5.4. RabbitMQ and NATS
- [ ] **RabbitMQ:** AMQP building blocks (direct, fanout, topic and headers exchanges; queues; bindings). Delivery acknowledgements (publisher confirms, consumer acks) and prefetch (QoS).
- [ ] **NATS:** Core NATS (request-reply, pub-sub) and the JetStream extension (durable streams, built-in key-value store).

### 5.5. High-level messaging buses (abstractions)
- [ ] **Tooling:** MassTransit, Rebus or Wolverine.
- [ ] **Pattern implementation:** Endpoint configuration for consumers, distributed state machines (sagas), delayed messages, and built-in outbox support.

---

## 6. Testing and Quality Assurance

### 6.1. Unit testing
- [ ] **Modern frameworks:** xUnit v3 (async-first, parallel execution), TUnit (a modern, Native AOT-friendly framework from Microsoft), NUnit.
- [ ] **Isolating dependencies (mocking):** NSubstitute versus the older Moq. The difference between stubs, mocks, spies and fakes. Mocking `HttpClient`.
- [ ] **Assertions:** Writing expressive checks with Fluent Assertions or Shouldly.

### 6.2. Integration, mutation and load testing
- [ ] **Integration tests:** `WebApplicationFactory` for in-process testing of web applications, and overriding container registrations via `ConfigureTestServices`.
- [ ] **Test infrastructure (Testcontainers):** Spinning up real databases, brokers and Redis in Docker containers straight from C# test code.
- [ ] **Managing test state:** Fast database resets between tests with `Respawn` (TRUNCATE instead of replaying migrations), plus snapshot testing with Verify.
- [ ] **Mutation testing:** Measuring how good your tests really are with Stryker (.NET) by injecting bugs into production code.
- [ ] **Profiling and load:** Writing load scenarios with k6 and NBomber. Microbenchmarking throughput and allocations with BenchmarkDotNet. Playwright for end-to-end tests.

---

## 7. Caching Strategies and State Management

### 7.1. The caching hierarchy
- [ ] **Client and edge caching:** HTTP cache headers (Cache-Control, ETag, Expires), conditional requests (If-None-Match), and CDNs.
- [ ] **Server-side application cache:** In-memory caching (`IMemoryCache`) and Output Caching in ASP.NET Core (response caching at the pipeline level with tag-based invalidation).

### 7.2. Two-level and distributed caching
- [ ] **Modern abstractions:** Hybrid Cache (introduced in .NET 9/10 as the replacement for the ageing `IDistributedCache`) — built-in two-tier caching (L1 in-process, L2 distributed) with cache stampede protection, when many requests miss at once and hit the database together. FusionCache as an alternative.
- [ ] **Cache infrastructure (Redis / Valkey / Garnet):**
    - The RESP protocol and the core data structures (strings, hashes, lists, sets, sorted sets).
    - Optimizing network round-trips: Redis pipelining with StackExchange.Redis to reach hundreds of thousands of RPS.
    - Distributed locks: the Redlock algorithm. Atomic counters (`INCR`) to protect hot database rows.

---

## 8. Observability and Diagnostics

### 8.1. Metrics, traces and logs (OpenTelemetry)
- [ ] **Data collectors:** Prometheus with Grafana for metrics; ELK, OpenSearch or Seq for structured logs; Datadog where it fits.
- [ ] **OpenTelemetry (OTel):** Wiring observability standards into .NET. Configuring `ActivitySource` (tracing), `Meter` (metrics) and `ILogger`, and exporting to the .NET Aspire Dashboard or Jaeger.
- [ ] **Distributed tracing:** Propagating a single trace ID across microservices and message queues (W3C Trace Context).

### 8.2. Low-level diagnostics and performance analysis
- [ ] **Runtime metrics:** Watching live counters with `dotnet-counters` (`cpu-usage`, `threadpool-queue-length`, `gc-heap-size`).
- [ ] **Reading incidents by symptom (symptom → suspicion):**
    - High CPU → infinite loops, inefficient LINQ chains, frequent garbage collections.
    - Growing thread pool queue → thread pool starvation caused by blocking calls in async code.
    - Memory leak → subscriptions never unsubscribed, static collections, `IDisposable` objects never disposed.
- [ ] **Dumps and profilers:** Capturing memory dumps on Linux and Windows with `dotnet-dump`, then digging into them in JetBrains dotMemory / dotTrace and PerfView.
- [ ] **The optimization loop:** Spot the anomaly in the quantiles (p50/p95/p99) → isolate the step with a distributed trace → reproduce it under a load test (k6) → profile (dotTrace) → optimize → re-run the load test.

---

## 9. Containerization and Orchestration

### 9.1. Containerizing applications (.NET on Docker)
- [ ] **Dockerfile optimization:** Multi-stage builds, caching the package restore layer correctly (`dotnet restore`), and keeping the final image small. Podman as a Docker alternative.
- [ ] **.NET image security:**
    - Publishing images straight from the .NET SDK (`dotnet publish /p:PublishProfile=DefaultContainer`).
    - Using hardened, minimal base images (Canonical's chiseled Ubuntu containers).
    - Running containers as a non-root user.
- [ ] **Local environment:** Multi-service stacks with Docker Compose, keeping environment settings, secrets and image tags in `.env` files.
- [ ] **GUI administration:** Portainer for container logs, volumes, isolated networks and quick stack deployments.

### 9.2. Docker storage architecture and data reliability
- [ ] **The container filesystem:** Why containers are ephemeral. The layered filesystem (Union FS / Overlay2) and copy-on-write. How writing large volumes straight into the container layer hurts I/O.
- [ ] **Mount types:**
    - **Volumes:** Storage managed by Docker itself, the default for databases such as PostgreSQL and SQL Server. Volume drivers for NFS or S3-backed storage.
    - **Bind mounts:** Mapping host directories into the container — local development, host log collection by external agents, injecting config files.
    - **tmpfs mounts:** Temporary data kept entirely in host memory (Linux only), never touching disk — sensitive sessions, short-lived keys.
- [ ] **Performance tuning and conflict resolution:**
    - Mounting configuration files read-only with `:ro`.
    - Resolving UID/GID ownership conflicts when a hardened .NET app runs as non-root inside the container and cannot write to a bind-mounted host directory. Configuring the `user:` directive in Docker Compose.
- [ ] **Backups:** Backing up named volumes through temporary containers (`docker run --volumes-from`) and reclaiming disk space with `docker volume prune`.

### 9.3. Orchestration (Kubernetes)
- [ ] **Kubernetes building blocks:** Pods, ReplicaSets, Deployments, and Services (ClusterIP, NodePort, LoadBalancer). Configuration via ConfigMaps and Kubernetes Secrets.
- [ ] **Lifecycle management:** Liveness, readiness and startup probes aligned with the ASP.NET Core health checks. Deployment strategies (rolling update, blue-green). Horizontal pod autoscaling (HPA) on metrics, or event-driven scaling with KEDA.
- [ ] **Infrastructure management:** Helm charts. Working with managed clusters (AKS) or higher-level abstractions (Azure Container Apps).

---

## 10. Cloud Architectures, Microservices and HighLoad Design (1M+ RPS)

### 10.1. Cloud infrastructure
- [ ] **The AWS stack for .NET:** File storage in S3, DynamoDB, integration services (SQS/SNS, EventBridge, Kinesis), serverless compute (AWS Lambda with Native AOT to tame cold starts), and secrets in AWS Secrets Manager.
- [ ] **The Azure stack for .NET:** Hosting (App Service, Azure Functions), messaging (Azure Service Bus, Event Hubs), Cosmos DB, and key/certificate management in Azure Key Vault.

### 10.2. Gateways and service discovery
- [ ] **API gateways:** The Backend-for-Frontend (BFF) pattern. Using Envoy or Nginx. Building custom gateways on YARP: dynamic routing, header transformation, and authorization policy integration.
- [ ] **Service discovery:** How services find each other in distributed environments — Consul, or the orchestrator's own DNS in Kubernetes.

### 10.3. Designing highly available (HighLoad) systems
- [ ] **The scale reality check:** One million RPS and beyond is an architecture of server farms, network load balancers, geo-distributed caches and databases — not a clever micro-optimization on a single server.
- [ ] **Capacity planning:** Translating business figures (say, 700 000 daily active users) into peak technical figures (thousands of RPS at peak). Designing in a 2–3× safety margin for traffic spikes and incidents.
- [ ] **Scaling strategies:** Scale out horizontally rather than endlessly and expensively optimizing a single instance. Keep the architecture stateless so nodes can be added freely.
- [ ] **The .NET Aspire platform:** Using .NET Aspire for local orchestration of cloud-native microservices, with AppHost-managed connection strings, ready-made components and end-to-end telemetry out of the box.

---

## 11. Artificial Intelligence and Machine Learning in .NET 10

### 11.1. LLM integration and Microsoft.Extensions.AI
- [ ] **Standardizing the AI layer in .NET:** Using the `Microsoft.Extensions.AI` abstractions to work with any model provider the same way (OpenAI, local Ollama, Azure OpenAI, Hugging Face).
- [ ] **Core concepts:** Prompt engineering, tokenization, managing the context window, and streaming responses through ASP.NET Core Minimal APIs.

### 11.2. RAG architecture and vector databases
- [ ] **Retrieval-augmented generation (RAG):** How the RAG pattern is put together, generating embeddings for documents, and chunking strategies (splitting text on semantic boundaries).
- [ ] **Vector stores:** Storing and searching similar vectors through `Microsoft.Extensions.VectorData`. Working with pgvector in PostgreSQL, Qdrant, Pinecone, and the built-in vector support in SQL Server 2025.

### 11.3. Autonomous agents and complex AI scenarios
- [ ] **Orchestration with Semantic Kernel:** Using Microsoft's Semantic Kernel, the plugin concept, and exposing your own C# functions to the model.
- [ ] **Tool calling / function calling:** Letting the model decide when to call into your .NET code (run a SQL query, hit an external API) based on the user's request.
- [ ] **Agent systems:** Architectural patterns for autonomous, cooperating AI agents (Agent Framework) and the Model Context Protocol (MCP).

---

## 12. Client-Side .NET

### 12.1. Modern web front-ends in C# (Blazor)
- [ ] **Hosting models:**
    - **Blazor Server:** Component state lives on the server, with a permanent interactive link over WebSockets (SignalR) — and the memory cost of holding every session.
    - **Blazor WebAssembly (WASM):** C# compiled to WebAssembly and running in the browser sandbox on the Mono/AOT runtime, with trimming to keep the downloaded DLLs small.
    - **Blazor Web App (.NET 10 auto mode):** The hybrid adaptive model — a fast server-rendered first paint, then a transparent switch to interactive WASM. Configuring render modes with `@rendermode`.
- [ ] **Component development:** Component lifecycle (`OnInitialized`, `OnParametersSet`, `ShouldRender`), two-way data binding, custom events (`EventCallback`), cascading parameters, and JS interop in both directions.

### 12.2. Mobile, cross-platform and desktop
- [ ] **.NET MAUI:** The successor to Xamarin.Forms — one project for Android, iOS, macOS (Mac Catalyst) and Windows (WinUI 3). MVVM, handlers for rendering, and direct access to native OS APIs.
- [ ] **Blazor Hybrid:** Embedding Blazor components into native mobile and desktop apps (MAUI, WPF) through `BlazorWebView`. Building the UI with HTML/CSS while keeping full access to OS resources, without the browser sandbox of WASM.
- [ ] **WPF / Uno Platform:** WPF fundamentals (XAML, dependency properties, data templates, styles, triggers). Uno Platform as the alternative for reusing XAML markup on Web (WASM) and mobile targets.

---

## 13. Background Tasks and Job Schedulers

### 13.1. Built-in .NET runtime mechanisms
- [ ] **Hosting background services:** Building long-running processes on `BackgroundService` / `IHostedService`.
- [ ] **Dependency lifetimes in singleton workers:** Understanding scope validation, and why injecting scoped services (like an ORM `DbContext`) into a singleton background service is a trap. Managing scopes by hand through `IServiceScopeFactory`.
- [ ] **High-throughput in-memory queues:** Using `System.Threading.Channels` (producer–consumer) to hand work to background processors asynchronously, without heavy thread locking.

### 13.2. External distributed schedulers
- [ ] **Hangfire:** A scheduler that persists job state in durable storage (SQL Server, PostgreSQL or Redis). Job types: fire-and-forget, delayed, recurring (cron), and continuations. Monitoring queues through the built-in Hangfire Dashboard, plus concurrency and worker pool tuning.
- [ ] **Quartz.NET:** The industrial-strength scheduler for complex schedules. `IJob`, `ITrigger` and `IScheduler`, exclusion calendars, and clustering for high availability and distributed execution.
- [ ] **Lightweight schedulers:** Coravel for simple in-process schedules, and TickerQ.

---

## 14. Core Libraries of the .NET Ecosystem

### 14.1. Validating objects and business data
- [ ] **FluentValidation:** Strongly typed, extensible rules for complex models. Keeping validation contracts out of business logic. Custom rules, async validation (`ValidateAsync`), integration with the ASP.NET Core request pipeline to produce ProblemDetails automatically. The built-in validation options in .NET 10.

### 14.2. Object mapping
- [ ] **The case against classic mappers:** The hidden costs of reflection-based mapping libraries (classic AutoMapper, for instance) in high-load systems: runtime type analysis, extra heap allocations, and N+1 queries that appear when mapping `IQueryable` trees.
- [ ] **Compile-time generation:** Moving to source-generated mappers — **Mapperly** or **Mapster**. Mapperly in depth: mapping code generated at compile time by source generators, no reflection at runtime, maximum throughput, and full Native AOT support.

### 14.3. General-purpose utilities
- [ ] **Text and grammar manipulation:** **Humanizer** for turning strings, dates, collections and numbers into human-friendly text, including grammatical forms.
- [ ] **Data parsing:** Streaming, parsing and writing flat tabular files efficiently with **CsvHelper**.

---

## 15. Build and Delivery Automation (CI/CD)

### 15.1. Building and parametrizing in .NET
- [ ] **Command-line tooling:** Fluency with the `dotnet` CLI (`dotnet build`, `dotnet test`, `dotnet publish`), driving build flags and configurations from arguments, and understanding MSBuild well enough to customize `.csproj` files and write your own `Target` and `Property`.

### 15.2. Automation platforms (pipelines)
- [ ] **GitLab CI/CD:** Pipelines in `.gitlab-ci.yml`, build stages, and isolated GitLab Runner agents with Docker-in-Docker (DinD). Caching NuGet packages between runs and integrating with the GitLab Container Registry.
- [ ] **GitHub Actions:** Workflows in YAML, reusing vetted marketplace actions (`actions/checkout`, `actions/setup-dotnet`), managing repository secrets safely, and matrix builds for testing across operating systems in parallel.
- [ ] **Azure DevOps Pipelines:** Both classic visual pipelines and modern YAML ones, integration with Azure Artifacts feeds, and the trade-offs of self-hosted versus Microsoft-hosted agents.
- [ ] **Jenkins:** Declarative and scripted pipelines in a `Jenkinsfile`, the .NET plugin ecosystem, and safe credential management.

### 15.3. Deployment strategies and image delivery
- [ ] **The artifact pipeline:** Building Docker images in CI, tagging them end to end (by commit hash or release version), and pushing to a private registry. Automatically refreshing test environments and controlling production deploys that require manual approval. Knowing when to use a full recreate versus a rolling update.
