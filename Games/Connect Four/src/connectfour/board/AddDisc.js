import update from 'react-addons-update';

export default function addDiscToBoard(board, columnNumber, color) {
    // TODO : check column exists
    // TODO : check color exists

    const column = board.cells[columnNumber];
    let rowNumber = -1;
    for (rowNumber = column.length - 1; rowNumber >= 0; rowNumber -= 1) {
        if (column[rowNumber] === 0) {
            break;
        }
    }

    return update(board, {
        cells: {
            [columnNumber]: {
                [rowNumber]: {
                    $set: color,
                },
            },
        },
    });
}
