<script>
  import { example as outline } from "./lib/getOutline";
  import Topic from "./lib/Topic.svelte";
  import SubTopic from "./lib/SubTopic.svelte";
  import { Router, Link, Route } from "svelte-routing";
  let url = "";
</script>

<Router {url}>
  <Route path="/:topicName/:subTopicName" component={SubTopic} />
  <Route path="/:topicName" component={Topic} />
  <Route path="/">
    {#each outline as topic (topic.name)}
      <a href="/{topic.name}">
        <p>{topic.name}</p>
      </a>
    {/each}
  </Route>
</Router>
