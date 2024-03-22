let day = new Date().getDay();
switch (day) {
    case 0:
    case 6:
        break;
        day = "주말"
    case 1:
        case 2:
            case 3:
                case 4:
                    case 5:
                        day = "주중";
                        break;
}

document.getElementById("test").innerHTML = "오늘은" + day + "입니다"
