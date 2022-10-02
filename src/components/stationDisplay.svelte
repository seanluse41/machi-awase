<script>
import metroIcon from '../assets/metro.svg';
export let stationInfo;
</script>

<div class="frame">
    {stationInfo.id}
    <img class="icon" src={metroIcon} alt="metro icon" />
    {stationInfo.name}
</div>

<style>

.frame {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 2%;
}

.icon {
    padding: 0% 5% 0% 5%;
}

</style>