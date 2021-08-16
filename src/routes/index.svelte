<script>
import Header from '../lib/components/Header/Header.svelte';
import Menu from '../lib/components/Menu.svelte';
import TaskList from '../lib/components/TaskList.svelte';

let name = "Miguel"; //custom name for users

</script>

<Header></Header>
<Menu name={name}></Menu>
<TaskList ></TaskList>

<style lang="postcss">

</style>
