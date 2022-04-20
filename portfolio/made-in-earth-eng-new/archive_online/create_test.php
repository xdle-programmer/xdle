<?php

for ($a = 1; $a < 101; $a++) {
    print_r("#{\$menu-item-hover} &:nth-last-of-type(". $a .") {animation-delay: ". $a * 14 ."ms;}");

}