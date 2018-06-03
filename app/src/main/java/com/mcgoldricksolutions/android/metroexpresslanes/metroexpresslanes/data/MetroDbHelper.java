package com.mcgoldricksolutions.android.metroexpresslanes.metroexpresslanes.data;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import com.mcgoldricksolutions.android.metroexpresslanes.metroexpresslanes.data.MetroExpressContract.CategoryEntry;
import com.mcgoldricksolutions.android.metroexpresslanes.metroexpresslanes.data.MetroExpressContract.TripEntry;
/**
 * Created by dirtbag on 8/24/14.
 */
public class MetroDbHelper extends SQLiteOpenHelper {

    private static final int DATABASE_VERSION = 1;
    public static final String DATABASE_NAME = "weather.db";

    public MetroDbHelper(Context context) {
        super(context, DATABASE_NAME, null, DATABASE_VERSION);
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
        // Create a table to hold locations.  A location consists of a postal code
        // and a human recognizable name (e.g. "Hermosa Beach").
        final String SQL_CREATE_CATEGORY_TABLE = "CREATE TABLE " + CategoryEntry.TABLE_NAME + " (" +
                // Why AutoIncrement here, and not above?
                // Unique keys will be auto-generated in either case.
                CategoryEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +

                // the ID of the category entry associated with this trip data
                CategoryEntry.COLUMN_DATE_CREATED + " TEXT NOT NULL, " +
                CategoryEntry.COLUMN_NAME + " TEXT UNIQUE NOT NULL, " +
                CategoryEntry.COLUMN_DESC + " TEXT UNIQUE NOT NULL, " +
                "UNIQUE (" + CategoryEntry.COLUMN_NAME + ") ON CONFLICT IGNORE" +
                " );";

        final String SQL_CREATE_TRIP_TABLE = "CREATE TABLE " + TripEntry.TABLE_NAME + " (" +
                // Why AutoIncrement here, and not above?
                // Unique keys will be auto-generated in either case. But for weather
                // forecasting, it's reasonable to assume the user will want information
                // for a certain date and all dates *following*, so the forecast data
                // should be sorted accordingly.
                TripEntry._ID + " INTEGER PRIMARY KEY AUTOINCREMENT," +

                TripEntry.COLUMN_DATE_POSTED + " TEXT NOT NULL, " +
                TripEntry.COLUMN_DATE_TX + " TEXT NOT NULL, " +

                TripEntry.COLUMN_TRANSPONDER_PLATE_NUMBER + " TEXT NOT NULL, " +
                TripEntry.COLUMN_AGENCY + " TEXT NOT NULL, " +
                TripEntry.COLUMN_ACTIVITY + " TEXT NOT NULL, " +
                TripEntry.COLUMN_ENTRY_TIME + " INTEGER NOT NULL," +
                TripEntry.COLUMN_ENTRY_PLAZA + " TEXT NOT NULL, " +
                TripEntry.COLUMN_EXIT_TIME + " INTEGER NOT NULL," +
                TripEntry.COLUMN_EXIT_PLAZA + " TEXT NOT NULL, " +

                // amount stored in pennies for accuracy
                TripEntry.COLUMN_AMOUNT + " INTEGER NOT NULL, " +

                // this only has 2 or 3 options, should be an integer
                TripEntry.COLUMN_HOV_SOV + " TEXT NOT NULL, " +
                // the ID of the category entry associated with this trip data
                TripEntry.COLUMN_CATEGORY_KEY + " INTEGER, " +
                TripEntry.COLUMN_NOTE + " TEXT, " +

                // Set up the location column as a foreign key to location table.
                " FOREIGN KEY (" + TripEntry.COLUMN_CATEGORY_KEY + ") REFERENCES " +
                CategoryEntry.TABLE_NAME + " (" + CategoryEntry._ID + "), " +

                // To assure the application have just one weather entry per day
                // per location, it's created a UNIQUE constraint with REPLACE strategy
                " UNIQUE (" + TripEntry.COLUMN_DATE_TX + ", " +
                TripEntry.COLUMN_ENTRY_TIME + ") ON CONFLICT REPLACE);";

        // execute queries
        sqLiteDatabase.execSQL(SQL_CREATE_CATEGORY_TABLE);
        sqLiteDatabase.execSQL(SQL_CREATE_TRIP_TABLE);
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i2) {
        sqLiteDatabase.execSQL("DROP TABLE IF EXITS " + CategoryEntry.TABLE_NAME);
        sqLiteDatabase.execSQL("DROP TABLE IF EXITS " + TripEntry.TABLE_NAME);
        onCreate(sqLiteDatabase);
    }

}
