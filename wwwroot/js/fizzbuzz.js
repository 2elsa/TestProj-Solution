
$(function () {

    $('button#fizzbuzz_gen_btn').click(() => {
        execute();
    });

    $('input[name="UpperLimit"],input[name="LowerLimit"]').keyup((evt) => {
        if (evt.keyCode === 13) {
            execute();
        }
    });

    const execute = () => {

        try {
            var upperLimit = $('input[name="UpperLimit"]').val(),
                lowerLimit = $('input[name="LowerLimit"]').val(),
                upperValue = parseInt(upperLimit, 10),
                lowerValue = parseInt(lowerLimit, 10);

            var fizzBuzz = fizzBuzzGenerator(lowerValue, upperValue, []),
                chunks_of_10 = chunckFunc(fizzBuzz, 10),
                fizzBuzzView = BuildFizzBuzzView(chunks_of_10);

            $('.fizzbuzz-viewer').hide().html('').append(fizzBuzzView).fadeIn();
        } catch (e) {
            $('.fizzbuzz-viewer').hide().html('').append(`<div class="p-3 bg-danger text-white">${e}</div>`).fadeIn();
        }
    }

})

function BuildFizzBuzzView(chunks_of_arrays) {
    var fizzBuzzView = '<div class="fizzbuzz-container row">',
        prevCount = 0;

    for (chunk of chunks_of_arrays) {
        var fizzBuzzRow = '<div class="fizzbuzz-row mt-2 col-md-12"><div class="row">';

        for (item of chunk) {
            fizzBuzzRow += buildItemView(item.header, item.value);
        }
        fizzBuzzView += fizzBuzzRow += '</div></div>';
    }

    return fizzBuzzView += '</div'
}

const buildItemView = (header, value) => {
    return `<div class="fizzbuzz-item col-md-1">
            <div class="fizzbuzz-header text-center bg-secondary"><span>${header}</span></div>
            <div class="fizzbuzz-value text-center  border border-secondary"><span>${value}</span></div>
           </div>`;
}

//source from stackoverflow: https://stackoverflow.com/questions/8495687/split-array-into-chunks#comment84212474_8495740
const chunckFunc = (arr, size) => Array(Math.ceil(arr.length / size)).fill().map((_, index) => index * size).map(begin => arr.slice(begin, begin + size));

function fizzBuzzGenerator(start, limit, tail) {
    tail = tail || [];

    if ((limit <= 0) || (start <= 0)) {
        throw `Limit: ${start <= 0 ? start : limit} must be a positive number`
    }

    if ((start > limit) && tail.length === 0)
        throw `Lower Limit: ${start} cannot be greater than Upper Limit: ${limit}`;

    var index = tail.length;

    if (start > limit) {
        return tail;
    }


    if (start % 3 === 0 && start % 5 === 0) {
        tail[index] = { header: start, value: 'FizzBuzz' };

        return fizzBuzzGenerator(++start, limit, tail);
    }

    if (start % 3 === 0) {
        tail[index] = { header: start, value: 'Fizz' };

        return fizzBuzzGenerator(++start, limit, tail);
    }

    if (start % 5 === 0) {
        tail[index] = { header: start, value: 'Buzz' };

        return fizzBuzzGenerator(++start, limit, tail);
    }

    tail[index] = { header: start, value: start + '' };

    return fizzBuzzGenerator(++start, limit, tail);

}

