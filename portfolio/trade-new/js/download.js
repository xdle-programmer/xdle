function download_progress(id, progress) {
    var percent = parseInt(progress);
    var block = document.getElementById(id);
    var $line = block.getElementsByClassName('download__state--progress');

    $line[0].style.width = percent + '%';

    if (percent >= 100) {
        block.className +=" download--full"
    }
}


