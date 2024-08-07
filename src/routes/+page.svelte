<script lang="ts">
    import { load } from "./+page";

    const data = load();
    const projects = data.projects;

    const colors = [
        "rgba(238, 220, 229, 0.3);",
        "rgba(238, 230, 202, 0.3);",
        "rgba(202, 238, 217, 0.3);"
    ]
</script>

<div class="container mt-2 mx-auto col-sm-11 col-lg-9">
    <div class="p-3 text-center text-black shadow mb-3 bg-white rounded">
        <h2 class="fw-bold">Eva J Herzog</h2>
        <a href="https://www.linkedin.com/in/ejherzog" target="_blank" class="text-reset">
            <i class="px-1 fa fa-linkedin-square text-decoration-none fs-3" aria-hidden="true"></i></a>
        <a href="https://github.com/ejherzog" target="_blank" class="text-reset">
            <i class="px-1 fa fa-github-square text-decoration-none fs-3" aria-hidden="true"></i></a>
    </div>

    <div class="shadow p-3 mb-3 bg-white rounded">
        <div class="pt-1 pb-1 text-center text-black">
            <h5>Personal Projects</h5>
        </div>
        {#each projects as project, index}
            <div class="container px-4 py-3 mb-3 shadow" style={`background-color: ${colors[index]}`}>
                <div class="row flex-lg-row-reverse align-items-center">
                    <div class="col-lg-6 my-3">
                        <img src={project.image} class="d-block mx-auto img-fluid"
                            alt="{project.title} App Screenshot" loading="lazy" />
                    </div>
                    <div class="col-lg-6">
                        <h5 class="display-7 fw-bold my-2 py-1">{project.title}</h5>
                        <h6 class="display-7 my-2 text-muted">{project.subtitle}</h6>
                        <p>{@html project.description}</p>
                        <a href={project.github} target="_blank">Github Repo <i class="fa fa-external-link-square" aria-hidden="true"></i></a>
                        {#if project.live}
                            <a href={project.live} target="_blank" class="ms-3">Live Demo <i class="fa fa-external-link-square" aria-hidden="true"></i></a>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>